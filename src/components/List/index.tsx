import { useState } from 'react'
import Item from './Item'
import style from './List.module.scss'

export default function Lista() {
    const [tarefas, setTarefas] = useState([
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
    ])

  return (
    <aside className={style.listaTarefas}>
        <h2 onClick={() => {
            setTarefas([...tarefas, {tarefa:"Estudar estado", tempo:"05:00:00"}])
        }}>Estudos do dia
        </h2>
        <ul>
            {tarefas.map((item, index) => (
                <Item
                    key={index}
                    {...item}
                />
            ))}
        </ul>
    </aside>
  )
}
