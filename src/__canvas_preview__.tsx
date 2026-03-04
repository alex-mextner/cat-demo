import React from 'react';

type InstanceEntry = { x?: number; y?: number; props?: Record<string, unknown> };

import { Card, SampleDefault as cardSampleDefault } from './components/ui/card';
import { Label, SampleDefault as LabelSampleDefault } from './components/ui/label';
import { Dialog, SampleDefault as DialogSampleDefault } from './components/ui/dialog';
import { Button, SampleDefault as ButtonSampleDefault } from './components/ui/button';

const componentRegistry: Record<string, React.ComponentType<Record<string, unknown>>> = {
  'src/components/ui/card.tsx': Card,
  'src/components/ui/label.tsx': Label,
  'src/components/ui/dialog.tsx': Dialog,
  'src/components/ui/button.tsx': Button,
};

const sampleRenderMap: Record<string, React.FC> = {
  'src/components/ui/card.tsx': cardSampleDefault,
  'src/components/ui/label.tsx': LabelSampleDefault,
  'src/components/ui/dialog.tsx': DialogSampleDefault,
  'src/components/ui/button.tsx': ButtonSampleDefault,
};

const sampleRenderersMap: Record<string, Record<string, React.FC>> = {
  'src/components/ui/card.tsx': {
    'default': cardSampleDefault,
  },
  'src/components/ui/label.tsx': {
    'default': LabelSampleDefault,
  },
  'src/components/ui/dialog.tsx': {
    'default': DialogSampleDefault,
  },
  'src/components/ui/button.tsx': {
    'default': ButtonSampleDefault,
  },
};

const callbackStubs = {
  onClick: () => console.log('[Preview] onClick'),
  onChange: (e: React.SyntheticEvent) => console.log('[Preview] onChange', (e?.target as HTMLInputElement)?.value),
  onSubmit: (e: React.SyntheticEvent) => { e?.preventDefault?.(); console.log('[Preview] onSubmit'); },
  onBlur: () => console.log('[Preview] onBlur'),
  onFocus: () => console.log('[Preview] onFocus'),
};

export default function CanvasPreview() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') as 'single' | 'multi';
  const componentPath = params.get('component');

  if (!componentPath) {
    return <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Error: No component specified</h2>
      <p>Add ?component=... to URL</p>
    </div>;
  }

  const Component = componentRegistry[componentPath];
  const sampleRenderers = sampleRenderersMap[componentPath] || {};

  if (mode !== 'multi') {
    const SampleDefault = sampleRenderMap[componentPath];
    if (!SampleDefault && !Component) {
      return <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h2>Error: Component not found</h2>
        <p>Component &quot;{componentPath}&quot; is not available</p>
      </div>;
    }
    return <div style={{ padding: 20 }}>{SampleDefault ? <SampleDefault /> : <Component />}</div>;
  }

  const instances = ((window.parent as unknown) as { __CANVAS_INSTANCES__?: Record<string, InstanceEntry> }).__CANVAS_INSTANCES__ || {};

  return (
    <div style={{ position: 'relative', width: 10000, height: 10000 }}>
      {Object.entries(instances).map(([id, instance]: [string, InstanceEntry]) => {
        const { x = 0, y = 0, props } = instance;

        if (props && Object.keys(props).length > 0 && Component) {
          const mergedProps = { ...callbackStubs, ...props };
          return (
            <div key={id} data-canvas-instance-id={id}
                 style={{ position: 'absolute', left: x, top: y }}>
              <Component {...mergedProps} />
            </div>
          );
        }

        const SampleComponent = sampleRenderers[id] || sampleRenderMap[componentPath];
        if (!SampleComponent) {
          if (Component) {
            return (
              <div key={id} data-canvas-instance-id={id}
                   style={{ position: 'absolute', left: x, top: y }}>
                <Component {...callbackStubs} />
              </div>
            );
          }
          return null;
        }

        return (
          <div key={id} data-canvas-instance-id={id}
               style={{ position: 'absolute', left: x, top: y }}>
            <SampleComponent />
          </div>
        );
      })}
    </div>
  );
}

