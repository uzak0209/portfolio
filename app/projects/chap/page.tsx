import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHAP - 位置情報ベースのクローズドSNS | uzak0209",
  description: "もっとローカルな話をSNSで共有。CHAP（チャップ）は位置情報ベースのクローズドSNSアプリケーションです。",
};

export default function ChapProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-purple-400 hover:text-purple-300 transition">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
              CHAP
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 mb-8">
              位置情報ベースのクローズドSNS
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              もっとローカルな話をSNSで共有しませんか？
              <br />
              あなたの周りで起きている「ホットな話題」「素敵な場所」「災害情報」「集合場所」を共有できます。
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
            <Image
              src="/images/projects/chap/slide-01.png"
              alt="CHAP アプリケーション - スマートフォンとデスクトップ"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://chap-app.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Webアプリを開く
            </a>
            <a
              href="https://github.com/uzak0209/CHAP_Grpc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-semibold border border-cyan-500/50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (gRPC)
            </a>
            <a
              href="https://github.com/uzak0209/CHAP_android"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-semibold border border-cyan-500/50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (Android)
            </a>
          </div>
        </div>
      </section>

      {/* Concept Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">もっとローカルな話をSNSで</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                CHAPは、あなたの周りで起きていることを共有できる、位置情報ベースのクローズドSNSです。
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <strong className="text-cyan-300">ホットな話題</strong>
                    <p className="text-sm text-gray-400">近所で話題になっていることをキャッチ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <strong className="text-cyan-300">素敵な場所</strong>
                    <p className="text-sm text-gray-400">地域の隠れた名所を発見・共有</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <strong className="text-cyan-300">災害情報</strong>
                    <p className="text-sm text-gray-400">緊急時の情報共有と安否確認</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <strong className="text-cyan-300">集合場所</strong>
                    <p className="text-sm text-gray-400">友達との待ち合わせ場所を簡単に共有</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
              <Image
                src="/images/projects/chap/slide-03.png"
                alt="CHAP マップインターフェース"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Screenshots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">主な機能</h2>
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
            <Image
              src="/images/projects/chap/slide-04.png"
              alt="CHAP 主な機能 - POST, THREAD, EVENT, SPOT"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">POST</h3>
              <p className="text-gray-300">
                投稿すると、マップ上にマーカーが表示されます。地図上で情報を視覚的に共有できます。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">THREAD</h3>
              <p className="text-gray-300">
                投稿に返信して、スレッド形式で会話を展開。地域の話題について議論できます。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20 hover:border-red-500/50 transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3 text-red-300">EVENT</h3>
              <p className="text-gray-300">
                イベント情報を地図上に登録。集合場所や開催場所を簡単に共有できます。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">SPOT</h3>
              <p className="text-gray-300">
                お気に入りの場所を登録。素敵なカフェやレストラン、景色の良い場所を保存できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">プライバシー保護</h2>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">安心・安全な位置情報共有</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  災害カテゴリの投稿以外は、現在地からマーカーの位置がずれて投稿されます。
                  これにより、プライバシーを守りながら、地域の情報を共有できます。
                </p>
                <p className="text-gray-400">
                  災害時には正確な位置情報を共有し、普段の投稿では匿名性を保つことができる、バランスの取れた設計になっています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop View Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">デスクトップでも利用可能</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
            <Image
              src="/images/projects/chap/slide-10.png"
              alt="CHAP デスクトップビュー"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-300 mt-8">
            スマートフォンだけでなく、PCのWebブラウザからもアクセス可能。
            大画面で地図を確認しながら、快適に投稿・閲覧できます。
          </p>
        </div>
      </section>

      {/* Advanced Features - Heat Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">先進的な機能：ヒートマップ</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
              <Image
                src="/images/projects/chap/slide-11.png"
                alt="CHAP ヒートマップ - 地域のトレンド可視化"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">クラスタリングによるトレンド分析</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                投稿データを自然言語処理（NLP）でトークナイズし、ベクトル化。
                クラスタリング技術により、地域で話題のテーマを自動的に抽出します。
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-lg font-semibold mb-3 text-purple-300">処理フロー</h4>
                <ol className="space-y-2 text-gray-300 text-sm">
                  <li>1. 投稿された全ての文章をトークナイズ化</li>
                  <li>2. 単語をベクトル化</li>
                  <li>3. ベクトル化した単語をクラスタリング</li>
                  <li>4. Gemini AIが最も要素数が多かったクラスタの共通の話題を抽出</li>
                  <li>5. ヒートマップに表示し、地域のトレンドを可視化</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">システムアーキテクチャ</h2>
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 bg-white p-4">
            <Image
              src="/images/projects/chap/slide-15.png"
              alt="CHAP システムアーキテクチャ図"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Mobile</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Kotlin</p>
                <p>• Android SDK</p>
                <p>• Google Maps API</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Frontend</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Next.js</p>
                <p>• React</p>
                <p>• TypeScript</p>
                <p>• Vercel</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Backend</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Go</p>
                <p>• gRPC</p>
                <p>• Protocol Buffers</p>
                <p>• PostgreSQL</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Infrastructure</h3>
              <div className="space-y-2 text-gray-300">
                <p>• AWS Lambda</p>
                <p>• AWS RDS</p>
                <p>• AWS S3</p>
                <p>• AWS EC2</p>
                <p>• Cloudflare Proxy</p>
                <p>• Cloudflare R2</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Machine Learning</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Rust</p>
                <p>• NLP (Tokenization)</p>
                <p>• Clustering Algorithm</p>
                <p>• Gemini AI</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Development</h3>
              <div className="space-y-2 text-gray-300">
                <p>• GitHub Actions (CI/CD)</p>
                <p>• Swagger (自動生成)</p>
                <p>• Orval</p>
                <p>• Air</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">開発体験へのこだわり</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Protocol Buffersによる型安全性</h3>
              <p className="text-gray-300">
                Protocol Buffersを利用したSwaggerの自動生成により、フロントエンドとバックエンド間の型の整合性を保証。
                開発効率と品質を同時に向上させています。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Orvalによるシームレスな連携</h3>
              <p className="text-gray-300">
                Orvalを使用してSwagger定義からTypeScriptの型とAPIクライアントを自動生成。
                フロントエンドとバックエンドの開発がスムーズに連携できる環境を構築しています。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">CI/CDパイプライン</h3>
              <p className="text-gray-300">
                GitHub Actionsを活用した自動テスト・デプロイメント。
                コード品質を保ちながら、迅速なリリースサイクルを実現しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Feedback */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">継続的な改善</h2>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-cyan-500/20">
            <p className="text-gray-300 text-lg mb-8 text-center">
              大学の教授や企業の社員からフィードバックをもらい、継続的に改善を行っています。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold mb-3 text-purple-300">📝 実装した改善</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• カテゴリの「娯楽」を「雑談」に変更し、デフォルトに設定</li>
                  <li>• 他の地図SNSにない機能の説明を追加</li>
                  <li>• ポップアップのUIが被らないように改善</li>
                  <li>• 地点登録からその地点へジャンプできる機能を追加</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold mb-3 text-purple-300">🎯 重視したポイント</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• ユーザビリティの向上</li>
                  <li>• 直感的なUI/UX</li>
                  <li>• プライバシー保護</li>
                  <li>• パフォーマンス最適化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">今すぐ試してみる</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto">
            Webアプリケーションとして公開中です。ぜひアクセスして、
            あなたの地域のローカルな情報を共有してみてください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://chap-app.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Webアプリを開く
            </a>
            <a
              href="https://github.com/uzak0209/CHAP_Grpc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-semibold border border-cyan-500/50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (gRPC)
            </a>
            <a
              href="https://github.com/uzak0209/CHAP_android"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-semibold border border-cyan-500/50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (Android)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition">
            ← ポートフォリオに戻る
          </Link>
          <p className="mt-4">&copy; 2024 uzak0209. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
