export default function Header() {
  return (
    <header
      className="h-16 flex items-center bg-black bg-opacity-60 mx-auto backdrop-filter backdrop-blur sticky top-0 z-30 bg-opacity-80 border-b-2 border-sky-500"
    >
      <div className="flex w-full items-center justify-center h-16">
        <a href={'/'} className={'font-bold'} style={{ letterSpacing: '.2rem' }}>DOGZ</a>
      </div>
    </header>
  )
}