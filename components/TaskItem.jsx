function TaskItem({
  id,
  titulo,
  concluida,
  onAlterar,
  onExcluir
}) {
  return (
    <div>
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? "Concluída" : "Pendente"}
      </p>

      {!concluida && (
        <button onClick={() => onAlterar(id)}>
          Concluir
        </button>
      )}

      {concluida && (
        <button onClick={() => onAlterar(id)}>
          Desmarcar
        </button>
      )}

      <button onClick={() => onExcluir(id)}>
        Excluir
      </button>

      <hr />
    </div>
  );
}

export default TaskItem;
