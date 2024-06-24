export default function Page() {
  const {AiFillAccountBook} = require('react-icons/ai')
  const Test = [AiFillAccountBook]

  return (
    <main>
      {Test.map((Element) => (
        <Element />
      ))}
    </main>
  )
}