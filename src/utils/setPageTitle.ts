export default function setPageTitle(title: string) {
  if (document && document?.title) {
    document.title = title;
  }
}
