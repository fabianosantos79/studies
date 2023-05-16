
export default function Lista() {
    const tarefas = [
        {
            tarefa: "Javascript",
            tempo: "02:00:00"
        },{
            tarefa:"React",
            tempo: "01:00:00"
        },{
            tarefa:"Typescript",
            tempo: "03:00:00"
        }
    ]

  return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <li key={index}>
                    <h2>{item.tarefa}</h2>
                    <span>{item.tempo}</span>
                </li>
            ))}
        </ul>
    </aside>
  )
}
