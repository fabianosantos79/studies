import style from './List.module.scss'

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
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <li key={index} className={style.item}>
                    <h2>{item.tarefa}</h2>
                    <span>{item.tempo}</span>
                </li>
            ))}
        </ul>
    </aside>
  )
}
