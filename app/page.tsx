export const dynamic = "force-dynamic"

interface Note {
  title: string,
  done: boolean
}

export default async function Home() {
  const notes: Note[] = await fetch('http://localhost:3000/api/notes').then(resp => resp.json());

  return (
   <main>

      <div className='border border-black'>
        {notes.map((element) => (
          <div className="border border-red-600 m-4">
            <h3>{element.title}</h3>
            <p>{element.done ? "Fait" : "Pas Fait"}</p>
          </div>
        ))}
      </div>


   </main> 
  )
}
