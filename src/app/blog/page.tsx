import PageHeaderBlog from '../../components/PageHeaderBlog';
import Cta from '../../components/Cta';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderBlog />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}