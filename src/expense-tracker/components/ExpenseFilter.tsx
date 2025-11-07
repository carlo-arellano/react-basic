interface Props {
  onSelectCategory: (value: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="All">All</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Transportation">Transportation</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
};

export default ExpenseFilter;
