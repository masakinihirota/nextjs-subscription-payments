// TOP PAGE 静的ページ

import { Button } from './button/Button';

export default function Page() {
  return (
    <>
      {/* キャッチフレーズ */}
      昨日僕が感動したことを、今日の君はまだ知らない。
      <br />
      {/* unauthへのリンクを作成 */}
      {/* これはメイン画面に移動する用*/}
      <a href="/unauth">unauth</a>
      <br />
      <Button label="Storybook Test Button" />
      <br />
      {/* <PricingPage /> */}
    </>
  );
}
