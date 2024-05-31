import { useEffect } from 'react';

/**
 * 지정된 요소 외부에서 클릭이 감지되었을 때 콜백을 실행하는 커스텀 훅.
 *
 * @param {Object} ref - 타겟 요소를 가리키는 React ref 객체.
 * @param {Function} handler - 타겟 요소 외부에서 클릭이 감지되었을 때 호출되는 콜백 함수.
 */
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    console.log('ref->', ref); // ref.current는 div.modal

    /**
     * 마우스 및 터치 이벤트에 대한 이벤트 리스너.
     *
     * @param {Event} event - 이벤트 객체.
     */
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        // 모달창이 안 닫히는 경우
        console.log('event.target->', event.target);
        return;
      }
      // 모달창이 닫히는 경우 (event) => {setModal(false)}
      handler(event);
    };

    // mousedown 및 touchstart 이벤트에 대한 이벤트 리스너 추가
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return null;
}

export default useOnClickOutside;
