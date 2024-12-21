import './App.css';
import myPhoto from '../photos/photo_2024-12-17_23-50-5e88.jpg';
import project1 from '../gif/bullscows.gif'; 
import project2 from '../gif/lamoda.gif';
import project3 from '../gif/notion.gif';
import project4 from '../gif/sapper.gif';
import project5 from '../gif/todolist.gif';

function App() {
  return (
    <>
      <div className="w-full h-auto shadow-lg mx-auto overflow-hidden flex flex-col p-6 bg-white rounded-lg relative">

        <div className="absolute top-4 right-4 w-32 h-32 md:w-40 md:h-40">
          <img src={myPhoto} alt="Matuk Anastasiya" className="w-full h-full object-cover rounded-full border-4 border-purple-600" />
        </div>

        <div className="text-left">
          <h1 className="text-purple-600 text-4xl md:text-5xl lg:text-6xl uppercase" style={{ fontFamily: 'Francois One, sans-serif' }}>
            Matuk Anastasiya
          </h1>
          <h2 className="text-[#67286C] text-2xl md:text-3xl">Student of BSU</h2>
          <hr className="my-4 border-t border-gray-300" />
        </div>

        <section className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-[#67286C] text-3xl font-bold text-left">About Me</h3>
          <p className="text-[#6F346D] font-light leading-relaxed mb-4">
            I am finishing my studies at the Belarusian State University in the specialty &quot;Mathematics and Computer Science&quot; with a specialization in &quot;web programming&quot;. While studying, I touch on almost all areas of the IT field. I strive to develop further.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold">Education</h4>
              <ul className="list-disc list-inside text-left">
                <li>Graduated from &quot;Lyceum No. 1 named after Academician Yu.M. Ostrovsky&quot; in Grodno with a silver medal.</li>
                <li>2nd year BSU student.</li>
                <li>I&apos;m studying web programming.</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold">Interests</h4>
              <ul className="list-disc list-inside text-left">
                <li>Web development</li>
                <li>Data science</li>
                <li>Artificial intelligence</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold">Hobbies</h4>
              <ul className="list-disc list-inside text-left">
                <li>Coding</li>
                <li>Web design</li>
                <li>Reading both professional and story books</li>
                <li>Sport</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold">Goals</h4>
              <p>To become a full-stack developer and contribute to innovative projects.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-[#67286C] text-3xl font-bold text-left">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">Language Skills</h4>
              <ul className="list-disc list-inside mt-2">
                <li>English Level: B2</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">Programming Languages</h4>
              <ul className="list-disc list-inside mt-2">
                <li>HTML</li>
                <li>C++</li>
                <li>SQL</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">Frameworks & Tools</h4>
              <ul className="list-disc list-inside mt-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Figma</li>
                <li>CSS / Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-[#67286C] text-3xl font-bold text-left">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">
                <a href="https://anastasiya-mtk.github.io/bulls-and-cows/" className="hover:underline">Game &quot;Bulls and Cows&quot;</a>
              </h4>
              <a href="https://anastasiya-mtk.github.io/bulls-and-cows/">
                <img src={project1} alt="Project 1" className="w-full h-auto rounded mt-2" />
              </a>
              <p className="mt-2">My first project written in JavaScript, also using HTML and CSS.</p>
              <ul className="list-disc list-inside mt-2">
                <li><strong>JavaScript:</strong> For game logic and user input processing.</li>
                <li><strong>HTML:</strong> For the structure of the web page.</li>
                <li><strong>CSS:</strong> For the visual design and styling of the web page.</li>
              </ul>
              <p className="mt-2">
                <a href="https://github.com/Anastasiya-Mtk/bulls-and-cows.git" className="text-purple-600 hover:underline">
                  View on GitHub
                </a>
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">Game &quot;Sapper&quot;</h4>
              <a href="https://anastasiya-mtk.github.io/Sapper-game/">
                <img src={project4} alt="Project 4" className="w-full h-auto rounded mt-2" />
              </a>
              <p className="mt-2">Developed the classic Minesweeper game using JavaScript, HTML, and CSS.</p>
              <ul className="list-disc list-inside mt-2">
                <li><strong>JavaScript:</strong> Implemented game logic, including bomb placement, cell opening, and flagging mechanism.</li>
                <li><strong>HTML:</strong> Structured the game interface with a grid layout for the cells.</li>
                <li><strong>CSS:</strong> Styled the game elements, including colors for numbers, flags, and bombs, enhancing user experience.</li>
              </ul>
              <p className="mt-2">
                <a href="https://github.com/Anastasiya-Mtk/Sapper-game.git" className="text-purple-600 hover:underline">
                  View on GitHub
                </a>
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">Notion-redux</h4>
              <img src={project3} alt="Project 3" className="w-full h-auto rounded mt-2" />
              <p className="mt-2 text-gray-700">
                A web application for creating and managing notes, developed using a modern technology stack, including:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li><strong>React</strong> for building user interfaces</li>
                <li><strong>Redux</strong> for state management</li>
                <li><strong>Tailwind CSS</strong> for styling</li>
                <li><strong>HTML and JavaScript</strong> for core functionality</li>
              </ul>
              <p className="mt-2">
              <a href="https://github.com/Anastasiya-Mtk/notion-redux.git" className="text-purple-600 hover:underline">
                 View on GitHub
              </a>
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">
                <a href="https://anastasiya-mtk.github.io/Lamoda/" className="hover:underline">Lamoda</a>
              </h4>
              <a href="https://anastasiya-mtk.github.io/Lamoda/">
                <img src={project2} alt="Project 2" className="w-full h-auto rounded mt-2" />
              </a>
              <p className="mt-2">Lamoda is a web application for creating and managing a clothing catalog, allowing users to filter, sort and search for products based on various criteria. The application provides a convenient interface for viewing and selecting clothes based on specified filters.</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li><strong>React:</strong> Used to build the interface and manage the state of the application.</li>
                <li><strong>Vite:</strong> Used as a build tool for rapid application development and optimization.</li>
                <li><strong>HTML/CSS:</strong> Basic technologies for markup and interface styling.</li>
                <li><strong>JavaScript:</strong> Used to implement application logic, including generating data using the Chance library and managing state using hooks.</li>
                <li><strong>UUID:</strong> For unique generation of product identifiers.</li>
              </ul>
              <p className="mt-2">
                <a href="https://github.com/Anastasiya-Mtk/Lamoda.git" className="text-purple-600 hover:underline">
                  View on GitHub
                </a>
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center text-purple-600">
                <a href="https://anastasiya-mtk.github.io/Todolist/" className="hover:underline">TodoList</a>
              </h4>
              <a href="https://anastasiya-mtk.github.io/Todolist/">
                <img src={project5} alt="Project 5" className="w-full h-auto rounded mt-2" />
              </a>
              <p className="mt-2">Developed a web application for managing tasks (Todo List) with the ability to add, edit and delete tasks. Users can filter tasks by completion status and importance, and search by title.</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li><strong>React:</strong> Used to build the user interface and manage the state of components.</li>
                <li><strong>JavaScript:</strong> Implemented application logic, including event handling and state manipulation.</li>
                <li><strong>HTML/CSS:</strong> Create application structure and styles that provide a good user experience.</li>
                <li><strong>UUID:</strong> Generate unique identifiers for each task.</li>
              </ul>
              <p className="mt-2">
                <a href="https://github.com/Anastasiya-Mtk/Todolist.git" className="text-purple-600 hover:underline">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-[#67286C] text-3xl font-bold text-left">Contact</h3>
          <p className="text-gray-700">Email: <a href="mailto:your.email@example.com" className="text-purple-600 hover:underline">matuk2006@gmail.com</a></p>
          <p className="text-gray-700">
            GitHub: 
            <a href="https://github.com/Anastasiya-Mtk" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Anastasiya-Mtk
            </a>
          </p>
        </section>
      </div>

      <footer className="w-full bg-gray-100 text-center p-4 mt-6">
        <p className="text-gray-600">© 2024 Matuk Anastasiya. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;