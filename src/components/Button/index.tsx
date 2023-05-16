
export default function Button() {
  const isActive = true;
  const styles = {
    backgroundColor:isActive ? "yellow" : "pink"
  }

  return (
    <button style={styles}>
        Botão
    </button>
  )
}
