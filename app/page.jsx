import Feed from "@components/Feed";

 
const Home = () => {
  return (
    <section className = 'w-full flex-center flex-col'>
        <h1 className  = "head_text text-center">
            Save & Share your prompte
            <br className='mex-md:hidden'/>
            <span className='orange_gradient text-center'> Ai Prompt skills</span>
        </h1>
        <p> This is my project to explore Next.js and share something useful with you! </p>

        <Feed />
    </section>
  )
}
export default Home;