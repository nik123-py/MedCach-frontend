export default function Footer() {
  return (
    <footer className="bg-blue-900 py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 MedCaché. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

