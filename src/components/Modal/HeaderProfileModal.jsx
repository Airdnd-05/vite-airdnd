import { forwardRef } from 'react';

const HeaderProfileModal = forwardRef((props, ref) => (
  <div ref={ref} className="absolute top-full right-0 z-50 w-[250px] h-[200px] bg-gray-200 rounded-2xl">
    <ul>
      <li>회원가입</li>
      <li>로그인</li>
      <li>당신의 공간을 에어비앤비하세요</li>
      <li>도움말 센터</li>
    </ul>
  </div>
));

HeaderProfileModal.displayName = 'HeaderProfileModal';

export default HeaderProfileModal;
