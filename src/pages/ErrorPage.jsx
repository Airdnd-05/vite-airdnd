import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center mb-4">
        <div className="text-6xl font-bold text-blue-600">404</div>
      </div>
      <h2 className="mb-2 text-4xl font-medium text-gray-800">페이지를 찾을 수 없습니다.</h2>
      <p className="mb-6 text-lg text-gray-500">
        원하시는 결과를 찾을 수 없습니다. 올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 사이트 소유자에게
        문의하시기 바랍니다.
      </p>
      <a href="/" className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
        메인으로 돌아가기
      </a>
      <p className="mt-4 text-sm text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
