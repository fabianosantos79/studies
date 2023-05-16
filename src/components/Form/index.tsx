import Button from "../Button";
import style from './Form.module.scss'


export default function Form() {
  return (
    <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione uma nova tarefa</label>
            <input 
                type="text"
                name="task"
                id="task"
                placeholder="O que você quer estudar"
                required
            />    
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input 
                type="time"
                name="temp"
                step="1"
                id="temp"
                min="00:00:00"
                max="01:30:00"
                required
            />
        </div>
        <Button />
    </form>
  )
}
    
