import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link href="./ModeTogglePage">ButtonTestPage</Link>
      <br />
      TOP PAGE
      <br />
      {/* unauthへのリンクを作成 */}
      <a href="/unauth">unauth</a>
    </>
  );
}
