const Article = () => {
    return (
      <div className="page p-4">
        <article className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-4">Tiêu đề lớn của trang bài viết</h1>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Tiêu đề cấp 2</h2>
            <section>
              <h3 className="text-xl font-semibold mb-2">Tiêu đề cấp 3</h3>
              <section>
                <h4 className="text-lg font-semibold mb-2">Tiêu đề cấp 4</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-4">
                  <img src="https://weui.io/images/pic_article.png" alt="Hình minh họa" className="inline-block mr-2" />
                  <img src="https://weui.io/images/pic_article.png" alt="Hình minh họa" className="inline-block" />
                </p>
              </section>
              <section>
                <h4 className="text-lg font-semibold mb-2">Ví dụ về danh sách</h4>
                <section>
                  <h5 className="text-base font-semibold mb-2">Danh sách không thứ tự gốc</h5>
                  <ul className="list-disc list-inside mb-4">
                    <li>Elit quo illum ut voluptate possimus. Maxime</li>
                    <li>
                      Elit quo illum ut voluptate possimus. Maxime
                      <ul className="list-disc list-inside ml-5">
                        <li>Elit facilis nam nam</li>
                        <li>Elit facilis nam nam</li>
                        <li>Elit facilis nam nam</li>
                      </ul>
                    </li>
                    <li>Elit quo illum ut voluptate possimus. Maxime</li>
                  </ul>
                </section>
                <section>
                  <h5 className="text-base font-semibold mb-2">Danh sách có thứ tự gốc</h5>
                  <ol className="list-decimal list-inside mb-4">
                    <li>Elit quo illum ut voluptate possimus. Maxime</li>
                    <li>
                      Elit quo illum ut voluptate possimus. Maxime
                      <ol className="list-decimal list-inside ml-5">
                        <li>Adipisicing adipisci labore deleniti</li>
                        <li>Adipisicing adipisci labore deleniti</li>
                        <li>Adipisicing adipisci labore deleniti</li>
                      </ol>
                    </li>
                    <li>Elit quo illum ut voluptate possimus. Maxime</li>
                  </ol>
                </section>
                <section>
                  <h5 className="text-base font-semibold mb-2">Danh sách đoạn văn gốc (cần tự thêm class)</h5>
                  <ol className="list-decimal list-inside mb-4">
                    <li>Elit quo illum ut voluptateElit quo illum ut voluptate possimus. Maxime</li>
                    <li>
                      Elit quo illum ut voluptate possimus. Maxime
                      <ol className="list-decimal list-inside ml-5">
                        <li>Adipisicing adipisci labore delenitAdipisicing adipisci labore delenitiiAdipisicing adipisci labore deleniti</li>
                        <li>Adipisicing adipisci labore deleniti</li>
                        <li>Adipisicing adipisci labore deleniti</li>
                      </ol>
                    </li>
                    <li>Elit quo illum ut voluptate possimus. Maxime</li>
                  </ol>
                </section>
                <section>
                  <h5 className="text-base font-semibold mb-2">Danh sách tùy chỉnh số thứ tự (cần tự thêm class)</h5>
                  <ol className="list-none mb-4">
                    <li>1 Elit quo illum ut voluptateElit quo illum ut voluptate possimus. Maxime</li>
                    <li>
                      2 Elit quo illum ut voluptate possimus. Maxime
                      <ol className="list-none ml-5">
                        <li>2.1 Adipisicing adipisci labore delenitAdipisicing adipisci labore delenitiiAdipisicing adipisci labore deleniti</li>
                        <li>2.2 Adipisicing adipisci labore deleniti</li>
                        <li>2.3 Adipisicing adipisci labore deleniti</li>
                      </ol>
                    </li>
                    <li>3 Elit quo illum ut voluptate possimus. Maxime</li>
                  </ol>
                </section>
              </section>
            </section>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Ví dụ tích hợp tiêu điểm truy cập</h2>
            <section>
              <p className="flex items-center mb-4">
                <span id="txt1" className="weui-a11y-combo__content" aria-hidden="true">
                  Ipsum cum soluta laudantium aperiam rem? Accusamus nostrum itaque sint?
                  <a id="txt2" className="weui-a11y-combo__content weui-link weui-wa-hotarea text-blue-500 ml-2" href="#">đọc thêm</a>
                </span>
               
              </p>
            </section>
          </section>
        </article>
      </div>
    );
  };
  
  export default Article;