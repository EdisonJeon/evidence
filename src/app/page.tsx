export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      
      {/* Cute Landing Page Header */}
      <section className="flex flex-col items-center justify-center mt-20 text-center bg-white p-12 rounded-3xl shadow-sm border border-pink-100">
        <h2 className="text-5xl font-extrabold text-rose-800 mb-6 drop-shadow-sm">
          Welcome Friends 🌸
        </h2>
        <p className="text-xl text-rose-600 mb-10 max-w-2xl font-medium leading-relaxed">
The NavBar on the top of the page is how you jump around the website, the top left will bring you back home, to this page, and the collapsible hamburger menu on the right will open all the articles of the FRE's and associated cases that we have learned throughout the semester. Please feel free to supplement your notes with this website. And yes, I know it's cute. Enjoy.        </p>
        
    
      </section>

    </main>
  );
}