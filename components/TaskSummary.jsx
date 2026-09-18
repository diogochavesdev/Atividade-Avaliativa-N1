function TaskSummary({ tarefas }) {
  const total = tarefas.length;

  const concluidas = tarefas.filter(
    tarefa => tarefa.concluida
  ).length;

  const pendentes = tarefas.filter(
    tarefa => !tarefa.concluida
  ).length;

  return (
    <section>
      <h2>Resumo</h2>

      <p>Total: {total}</p>
      <p>Concluídas: {concluidas}</p>
      <p>Pendentes: {pendentes}</p>
    </section>
  );
}

export default TaskSummary;
