// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T01:29:16.611Z
// Section: page-header
// Category: page-header
// Template ID: page-header-l001
// Page: Blog
// Component: PageHeaderBlog

export default function PageHeaderTitleOnly({ 
  title = "Open Banking Insights", 
  category = "Blog", 
  date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {category}
              </span>
              <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  OB
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">OpenBank Advisors</p>
                <p className="text-sm text-gray-500">Financial Innovation Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}