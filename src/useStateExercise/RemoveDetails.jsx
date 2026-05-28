function RemoveDetails({ onRemove, disabled }) {
  return (
    <button type="button" onClick={onRemove} disabled={disabled}>
      Remove details
    </button>
  );
}

export default RemoveDetails;
