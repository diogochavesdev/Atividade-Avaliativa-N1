import { useState } from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer atividade", concluida: false },
    { id: 3, titulo: "Estudar JavaScript", concluida: true },
    { id: 4, titulo: "Revisar Hooks", concluida: false }
  ]);

  function alterarTarefa(id) {
    setTarefas(prevTarefas =>
      prevTarefas.map(tarefa =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  function excluirTarefa(id) {
    setTarefas(prevTarefas =>
      prevTarefas.filter(tarefa => tarefa.id !== id)
    );
  }

  return (
    <div>
      <Header />

      <TaskList
        tarefas={tarefas}
        onAlterar={alterarTarefa}
        onExcluir={excluirTarefa}
      />

      <TaskSummary tarefas={tarefas} />

      {tarefas.some(tarefa => !tarefa.concluida) ? (
        <p>Você ainda possui tarefas pendentes.</p>
      ) : (
        <p>Parabéns! Todas as tarefas foram concluídas!</p>
      )}
    </div>
  );
}

export default App;
