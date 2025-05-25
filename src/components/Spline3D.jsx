import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Spline3D() {
  const splineRef = useRef();

  useEffect(() => {
    const onLoad = () => {
      if (splineRef.current?.emitEvent) {
        // Desactiva los controles después de cargar
        splineRef.current.emitEvent('controls:disable');
      }
    };

    // El método emitEvent es solo si lo has configurado en Spline, pero por compatibilidad:
    if (splineRef.current) {
      splineRef.current.addEventListener('load', () => {
        splineRef.current.controls.enabled = false;
      });
    }

    return () => {
      if (splineRef.current) {
        splineRef.current.removeEventListener('load', onLoad);
      }
    };
  }, []);

  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/d2ajuLLrFZIx9Eps/scene.splinecode"
      />
    </main>
  );
}

