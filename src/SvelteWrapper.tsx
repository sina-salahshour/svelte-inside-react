import React from "react";
import { useLayoutEffect, useRef } from "react";
import { ComponentType } from "svelte";

export function SvelteWrapper<T extends ComponentType>(
  Component: T
): (props: ConstructorParameters<T>[0]["props"]) => JSX.Element {
  return (props) => {
    const svelteRef = useRef<any>();
    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current?.firstChild?.remove();
      }
      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}
