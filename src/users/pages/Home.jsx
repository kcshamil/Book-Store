import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getHomePageBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'




function Home() {
  const navigate = useNavigate()
  // const [searchKey, setSearchKey] = useState("")
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [homeBooks, setHomeBooks] = useState([])

  console.log(homeBooks);

  useEffect(() => {
    getHomeBooks()
  }, [])

  const getHomeBooks = async () => {
    const result = await getHomePageBooksAPI()
    // console.log(result);
    if (result.status == 200) {
      setHomeBooks(result.data)
    } else {
      console.log(result);
    }
  }

  const handleSearch = () => {
    if (!searchKey) {
      toast.warning("Please provide A Book title here!!!")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("Please Login to Search Book!!")
      setTimeout(() => {
        navigate('/login')
      }, 2500);
    } else if (sessionStorage.getItem("token") && searchKey) {
      navigate('/books')
    } else {
      toast.error("Something went wrong!!!")
    }
  }

  return (
    <>
      <Header />
      <div>
        {/* landing part - search */}
        <div className="flex justify-center items-center flex-col bg-[url(banner.jpg)] bg-cover bg-center text-white">
          <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.4)' }} className='w-full flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
            <p>Gift your family and friends a book</p>
            {/* search */}
            <div className="mt-9 flex">
              <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here' />
              <button onClick={handleSearch}><FaSearch className='text-gray-500' style={{ marginLeft: '-40px' }} /></button>
            </div>
          </div>
        </div>
        {/* new arrival */}
        <section className='md:px-40 p-5 my-5 flex flex-col   justify-center items-center'>
          <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
          <h2 className="text-2xl">Explore our latest collection</h2>
          {/* books row & col */}
          <div className="md:grid grid-cols-4 w-full mt-10">
            {/* duplicate book card div */}
            {
              homeBooks?.length > 0 ?
                homeBooks?.map(book => (
                  <div key={book?._id} className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
                    <img width={'250px'} height={'250px'} src={book?.imageURL} alt="book" />
                    <div className="flex justify-center items-center flex-col mt-4">
                      <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
                      <h4 className='text-lg'>{book?.title}</h4>
                      <h4>$ {book?.discountPrice}</h4>
                    </div>
                  </div>
                ))
                :
                <p className='font-bold'>Loading ...</p>
            }
          </div>

          {/* all books link */}
          <div className="text-center mt-20">
            <Link to={'/books'} className='p-3 bg-black text-white' >Explore More...</Link>
          </div>

        </section>
        {/* author */}
        <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10">
          {/* author content */}
          <div className="text-center">
            <h1 className='text-2xl font-bold'>FEATURED AUTHORS</h1>
            <h2 className='text-xl'>Captivates With Every Word</h2>
            <p className="text-justify mt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum itaque vero laboriosam! Minima tenetur eum perspiciatis nemo obcaecati, sit placeat porro saepe adipisci! Numquam commodi voluptate neque, autem id magnam!
              Officia sunt reprehenderit accusamus nam reiciendis quod, vero at eveniet dolorem et dignissimos inventore doloribus beatae, nobis veniam velit quas ducimus mollitia tempora placeat quae nemo. Dolorum recusandae ipsam quidem.
              Cupiditate nostrum aspernatur minus repellendus asperiores nobis temporibus possimus, beatae qui quibusdam totam consequatur aliquid cumque ducimus quas dolorum quaerat consectetur quam. Culpa, harum deleniti totam nisi iusto dolor veniam.
            </p>
            <p className='text-justify mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique illum ad consectetur, esse vero repellat magni nemo dicta quod sequi earum enim ullam maxime totam, a sunt, laudantium autem.
              Eum minus autem est atque, aut, cumque accusantium corrupti ducimus quasi, ullam obcaecati optio odit! Quam, eveniet. Quibusdam nesciunt amet nihil, velit molestias sapiente corporis aperiam esse delectus id facere.
              Unde, voluptatum corporis consectetur in totam facere natus molestias labore, quas quam eaque commodi sapiente, alias repellendus debitis asperiores tempore doloremque vitae cumque! Necessitatibus, quidem omnis iste accusantium facere reprehenderit?
            </p>
          </div>
          {/* author image */}
          <div className="p-5 flex justify-center items-center">
            <img className='w-full' src="https://i.pinimg.com/originals/d7/37/94/d737946d153beb56555ed95ab0af1ee1.jpg" alt="author" />
          </div>
        </section>
        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
          <h2 className="text-2xl">See What Others Are Saying</h2>
          <div className="my-10 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg" alt="user" />
            {/* feedback */}
            <p className='mt-5'>Lucas Alexander</p>
            <p className='text-justify mt-4'><span className='font-bold me-2'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi, enim quos, nam animi repudiandae temporibus ex optio ipsam laudantium quaerat fuga odit quae a inventore quibusdam quod necessitatibus dolore!
              Fuga, accusamus laborum vero ad earum dolorem voluptatibus repudiandae officia. Doloribus velit sunt deleniti facilis asperiores odio accusamus nostrum recusandae dolorem? Sequi odit nostrum praesentium accusamus voluptates molestiae, ipsa inventore?
              Id praesentium earum suscipit, tempora beatae molestias fugiat in omnis nostrum porro. Mollitia eligendi nostrum corrupti delectus voluptatum, animi amet modi eum laboriosam voluptates tempora expedita nulla fugit pariatur libero."</span></p>
          </div>
        </section>


      </div>
      <Footer />
    </>
  )
}

export default Home