const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <div>
        GitHub: [<a href="https://github.com/simply-joe">@simply-joe]</a>]
      <br />
        Linkedin: [<a href="https://github.com/simply-joe">@joseph-krawiec</a>]
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
