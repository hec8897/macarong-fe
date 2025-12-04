interface PortalProps {
  /** Portal에 렌더링할 자식 요소 */
  children: React.ReactNode;
  /** Portal이 마운트될 DOM 요소의 ID - default: 'modal-root' */
  selector?: string;
}

export type { PortalProps };
