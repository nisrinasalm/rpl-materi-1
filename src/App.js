import './App.css';
import Column from './column'

const mockData = [
  {
    title: 'Backlog',
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    input: '',
  },
  {
    title: 'In progress',
    tasks: ['Task 5', 'Task 6'],
    input: '',
  },
  {
    title: 'Review',
    tasks: ['Task 10', 'Task 11'],
    input: '',
  },
  {
    title: 'Done',
    tasks: ['Task 7', 'Task 8', 'Task 9'],
    input: '',
  }
]

/* TODO: we can also make the number of
  columns customizable.
*/
const getColumnSection = () => (
  <section className="columns">
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
    />
    <Column
      itemList={mockData[3].tasks}
      colTitle={mockData[3].title}
    />
  </section>
);

function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>
          Project Management Board
        </h2>
      </header>

      {getColumnSection()}
      
    </div>
  );
}

export default App;