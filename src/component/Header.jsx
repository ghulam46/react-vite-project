/* eslint-disable react/prop-types */

export default function Header({author}) {
    return <h1>Belajar React bersama {author ? author : 'WPU'} 🚀</h1>;
  }