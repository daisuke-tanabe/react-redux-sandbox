import Link from 'next/link';

export default () => (
  <div>
    <div>Welcome to next.js!</div>
    <ul>
      <li>
        <Link href="/react">
          <a>react</a>
        </Link>
      </li>
      <li>
        <Link href="/react-ajax">
          <a>react-ajax</a>
        </Link>
      </li>
    </ul>
  </div>
)
