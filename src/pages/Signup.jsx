function Signup() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded"/>
        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded"/>
        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded"/>
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
