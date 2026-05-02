import Image from 'next/image';
import { HiOutlineArchive, HiOutlineTrash, HiOutlinePhone, HiOutlineVideoCamera } from 'react-icons/hi';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdOutlineTextsms } from "react-icons/md";

export const metadata = {
  title: 'SunCart | Details',
  description: 'Product Details'
}

const productsData = [
        { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "stock": 10, "description": "Stylish UV protection sunglasses perfect for summer outings.", "image": "https://plus.unsplash.com/premium_photo-1693222144072-7f9ddceeb7c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "category": "Accessories" },
        { "id": 2, "name": "Quick-Dry Beach Towel", "brand": "AquaSoft", "price": 25, "rating": 4.8, "stock": 45, "description": "Sand-free microfiber towel that dries three times faster than cotton.", "image": "https://images.unsplash.com/photo-1625931046289-e51edea3e176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwdG93ZWx8ZW58MHx8MHx8fDA%3D", "category": "Outdoor Gear" },
        { "id": 3, "name": "Portable Handheld Fan", "brand": "CoolBreeze", "price": 12, "rating": 4.5, "stock": 100, "description": "Rechargeable mini fan with three speed settings for instant cooling.", "image": "https://plus.unsplash.com/premium_photo-1752929587329-4cb507a964f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGFibGUlMjBmYW58ZW58MHx8MHx8fDA%3D", "category": "Electronics" },
        { "id": 4, "name": "Broad Spectrum SPF 50 Sunscreen", "brand": "SkinGuard", "price": 18, "rating": 4.9, "stock": 60, "description": "Water-resistant, non-greasy formula perfect for high-intensity sun exposure.", "image": "https://images.unsplash.com/photo-1657023828553-18c23601c4d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vuc2NyZWVufGVufDB8fDB8fHww", "category": "Skincare" },
        { "id": 5, "name": "Insulated Water Bottle", "brand": "HydroChill", "price": 30, "rating": 4.6, "stock": 25, "description": "Double-walled stainless steel bottle that keeps drinks cold for 24 hours.", "image": "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdWxhdGVkJTIwd2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D", "category": "Home & Kitchen" },
        { "id": 6, "name": "Foldable Wide-Brim Sun Hat", "brand": "SummerVibe", "price": 22, "rating": 4.4, "stock": 15, "description": "Breathable straw hat with an adjustable chin strap for windy beach days.", "image": "https://images.unsplash.com/photo-1758900494591-482f42d473a6?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "category": "Apparel" }
    ]

const ProductDetails = async ({ params }) => {
  const { friendId } = await params;
  const product = productsData.find((p) => p.id === Number(friendId));
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* LEFT COLUMN: Profile & Actions */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="card bg-white border border-slate-100 shadow-sm p-10 flex flex-col items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full">
                <Image src={product.image} alt={product.name} width={500} height={500} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
            {/* Dynamic Status Badge */}
            <div className={`badge ${product.status === 'overdue' ? 'badge-error' :
              product.status === 'almost due' ? 'badge-warning' :
                'badge-success'
              } text-[10px] font-bold py-3 px-4 mt-2 mb-1 border-none uppercase text-white`}>
              {product.status}
            </div>
            {/* Dynamic Tags */}
            <div className="flex flex-wrap gap-1 justify-center">
              {/* {friend.tags.map(tag => (
                <div key={tag} className="badge bg-emerald-100 text-emerald-600 text-[10px] font-bold py-3 px-4 mb-6 border-none uppercase">
                  {tag}
                </div>
              ))} */}
            </div>

            <p className="text-slate-500 italic text-sm mb-1 leading-relaxed">{product.bio}</p>
            <p className="text-slate-400 text-xs uppercase font-semibold">Preferred: <span className="lowercase font-normal">{product.email}</span></p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="btn bg-white hover:bg-slate-50 border-slate-200 text-slate-700 normal-case justify-start gap-3 h-14 font-medium shadow-sm">
              <HiOutlineBellSnooze className="text-xl" /> Snooze 2 Weeks
            </button>
            <button className="btn bg-white hover:bg-slate-50 border-slate-200 text-slate-700 normal-case justify-start gap-3 h-14 font-medium shadow-sm">
              <HiOutlineArchive className="text-xl" /> Archive
            </button>
            <button className="btn bg-white hover:bg-red-50 border-slate-200 text-red-500 normal-case justify-start gap-3 h-14 font-medium shadow-sm">
              <HiOutlineTrash className="text-xl" /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats & Goals */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {/* Top Stat Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-40">
            {[
              { val: product.days_since_contact, label: "Days Since Contact" },
              { val: product.goal, label: "Goal (Days)" },
              { val: product.next_due_date, label: "Next Due", isDate: true }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-lg flex flex-col items-center justify-center gap-1">
                <span className={`font-bold text-slate-800 ${stat.isDate ? 'text-2xl' : 'text-4xl'}`}>{stat.val}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Relationship Goal Box */}
          <div className="card bg-white border border-slate-100 shadow-sm p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-slate-800">Relationship Goal</h3>
              <button className="btn btn-ghost btn-xs text-slate-400 font-bold uppercase tracking-wider">Edit</button>
            </div>
            <p className="text-slate-500 font-medium">Connect every <span className="text-slate-900 font-bold">30 days</span></p>
          </div>

          {/* Quick Check-In Box */}
          <div className="card bg-white border border-slate-100 shadow-sm p-8">
            <h3 className="font-bold text-slate-800 mb-8">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="btn bg-white hover:bg-slate-50 border-slate-100 flex flex-col items-center justify-center gap-2 h-28 shadow-sm">
                <HiOutlinePhone className="text-2xl text-slate-700" />
                <span className="text-sm font-medium text-slate-600 normal-case">Call</span>
              </button>
              <button className="btn bg-white hover:bg-slate-50 border-slate-100 flex flex-col items-center justify-center gap-2 h-28 shadow-sm">
                <MdOutlineTextsms className="text-2xl text-slate-700" />
                <span className="text-sm font-medium text-slate-600 normal-case">Text</span>
              </button>
              <button className="btn bg-white hover:bg-slate-50 border-slate-100 flex flex-col items-center justify-center gap-2 h-28 shadow-sm">
                <HiOutlineVideoCamera className="text-2xl text-slate-700" />
                <span className="text-sm font-medium text-slate-600 normal-case">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;