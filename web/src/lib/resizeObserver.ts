const resizeObserver = (node: HTMLElement) => {
  const ro = new ResizeObserver((entries, observer) => {
    node.dispatchEvent(new CustomEvent('resize', { detail: {entries, observer} }))
  });

  ro.observe(node);

  return {
    destroy() {
      ro.disconnect();
    }
  }
}

export default resizeObserver
