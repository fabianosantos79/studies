import Button from "../Button";


export default function Form() {
  return (
    <form>
        <div>
            <label htmlFor="task">Adicione uma nova tarefa</label>
            <input 
                type="text"
                name="task"
                id="task"
                placeholder="O que você quer estudar"
                required
            />    
        </div>
        <div>
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
    
