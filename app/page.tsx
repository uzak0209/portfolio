import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-purple-400">uzak0209</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            uzak0209
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Software Engineer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            名工大情報学部所属。情報安全確保支援士合格、TOEIC 820点。
            <br />
            バックエンド（Go, Rust）からフロントエンド（TypeScript, React）、
            <br />
            インフラ（Docker, AWS）まで幅広く対応。
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/uzak0209"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-semibold"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-semibold border border-purple-500/50"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Education</h3>
              <p className="text-gray-300 mb-2">名古屋工業大学 情報学部</p>
              <p className="text-gray-400">2023年12月 - 2024年1月</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Certifications</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 情報安全確保支援士 合格</li>
                <li>• TOEIC 820点</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Frontend</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <img src="https://skillicons.dev/icons?i=ts,nextjs,react,tailwind&theme=dark" alt="Frontend Skills" />
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Backend</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <img src="https://skillicons.dev/icons?i=go,rust,python,java,c&theme=dark" alt="Backend Skills" />
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Infrastructure</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <img src="https://skillicons.dev/icons?i=docker,linux,nginx,aws&theme=dark" alt="Infrastructure Skills" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "CHAP",
                description: "位置情報ベースのクローズドSNSアプリケーション。ローカルな話題を地図上で共有できます。",
                tech: "Kotlin, Go, TypeScript",
                link: "/projects/chap",
                isInternal: true,
                featured: true
              },
              {
                name: "AI_Based_IDS",
                description: "AIベースの侵入検知システム",
                tech: "Rust",
                link: "https://github.com/uzak0209/AI_Based_IDS",
                isInternal: false
              },
              {
                name: "domestic-accounts-book-by-receipt",
                description: "レシート管理システム",
                tech: "Python",
                link: "https://github.com/uzak0209/domestic-accounts-book-by-receipt",
                isInternal: false
              },
              {
                name: "echo",
                description: "Rustで実装されたechoサーバー",
                tech: "Rust",
                link: "https://github.com/uzak0209/echo",
                isInternal: false
              },
              {
                name: "engarde_client",
                description: "Rustクライアントアプリケーション",
                tech: "Rust",
                link: "https://github.com/uzak0209/engarde_client",
                isInternal: false
              },
              {
                name: "CHAP_Grpc",
                description: "TypeScriptを使用したgRPCプロジェクト",
                tech: "TypeScript",
                link: "https://github.com/uzak0209/CHAP_Grpc",
                isInternal: false
              },
            ].map((project) => {
              const cardContent = (
                <>
                  {project.featured && (
                    <div className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded text-xs font-semibold mb-3">
                      FEATURED
                    </div>
                  )}
                  <h3 className={`text-xl font-semibold mb-3 ${
                    project.featured
                      ? 'text-cyan-300 group-hover:text-cyan-400'
                      : 'text-purple-300 group-hover:text-purple-400'
                  } transition`}>
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-block ${
                      project.featured
                        ? 'bg-cyan-600/20 text-cyan-300'
                        : 'bg-purple-600/20 text-purple-300'
                    } px-3 py-1 rounded text-sm`}>
                      {project.tech}
                    </span>
                    {project.isInternal && (
                      <span className="text-cyan-400 text-sm">詳細を見る →</span>
                    )}
                  </div>
                </>
              );

              const cardClassName = `block bg-slate-800/50 p-6 rounded-lg border ${
                project.featured
                  ? 'border-cyan-500/40 hover:border-cyan-500/70 md:col-span-2 lg:col-span-1'
                  : 'border-purple-500/20 hover:border-purple-500/50'
              } transition group`;

              return project.isInternal ? (
                <Link
                  key={project.name}
                  href={project.link}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              ) : (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Contact</h2>
          <p className="text-gray-300 mb-8 text-lg">
            お仕事のご依頼やご質問がございましたら、GitHubからお気軽にご連絡ください。
          </p>
          <a
            href="https://github.com/uzak0209"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-semibold"
          >
            GitHub でコンタクト
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 uzak0209. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
