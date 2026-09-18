import TaskItem from "./TaskItem";

function TaskList({ tarefas, onAlterar, onExcluir }) {
  return (
    <section>
      <h2>Lista de Tarefas</h2>

      {tarefas.length === 0 ? (
        <p>Não existem tarefas cadastradas.</p>
      ) : (
        tarefas.map(tarefa => (
          <TaskItem
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            concluida={tarefa.concluida}
            onAlterar={onAlterar}
            onExcluir={onExcluir}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;
