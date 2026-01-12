import './App.css'
import { Button } from './components/ui/button'
import { ToastContainer, toast } from 'react-toastify'
import { Camera } from 'lucide-react'


function App() {
	    const notify = () => toast('Wow so easy!')
  return (
		<div>
			<h1 className='text- text-3xl font-bold underline'> Hello world! </h1>
			<Button>Click me</Button>
			<div>
				<button onClick={notify}>Notify!</button>
				<ToastContainer />
			</div>
			<Camera color='red' size={48} />;
		</div>
	)
}

export default App
