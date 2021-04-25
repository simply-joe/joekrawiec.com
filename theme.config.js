const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <div>
        GitHub: [@simply-joe](https://github.com/simply-joe)
      <br />
        Linkedin: [@joseph-krawiec](https://www.linkedin.com/in/joseph-krawiec/)
      <br />
        Email: joe [at] joekrawiec [dot] com
      </div>
      <time>{YEAR}</time> © Joe Krawiec.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
