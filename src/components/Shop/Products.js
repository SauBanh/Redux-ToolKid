import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'A Guide to the Project Management Body of Knowledge: PMBOK® Guide',
        description:
            'PMBoK là một sự lựa chọn hoàn hảo với các hướng dẫn và thuật ngữ tiêu chuẩn trong ngành quản lý dự án. Bản mới nhất được xuất bản vào 01/08/2021, là một tài liệu tham khảo cần thiết đối với những ai muốn tham gia vào bài kiểm tra Professional Management Professional (PMP). Cuốn sách sẽ cho bạn một cái nhìn tổng quan về các tiêu chuẩn và phương pháp tiếp cận khi nghiên cứu kỹ thuật quản lý dự án. Phiên bản bìa mềm có giá $ 68,45 và $ 65,03 cho phiên bản Kindle.',
    },
    {
        id: 'p2',
        price: 8,
        title: 'Project Management Absolute Beginner’s Guide',
        description:
            'Theo tác giả Gregory Horine, một nhà quản lý dự án chuyên nghiệp là một chuyên gia về IT với hơn 20 năm kinh nghiệm. Cuốn sách này dành cho những nhà quản lý tương đối mớ, bao gồm toàn bộ quy trình nhưng tập trung nhiều hơn vào việc lập kế hoạch, kiểm soát và thực hiện dự án. Trong đó cũng có một số mẹo về cách sử dụng phần mềm MS Project mới nhất và có nhiều biểu đồ tổng quan hướng dẫn giúp bạn.',
    },
    {
        id: 'p3',
        price: 8,
        title: 'The Fast Forward MBA in Project Management',
        description:
            'Tác giả Eric Verzuh là chủ tịch của Versiverse, một công ty tư vấn và đào tạo PM bắt đầu vào năm 1990. Phiên bản thứ 5 đã được xuất bản vào tháng 11/2015, với mức giá $ 18,79 cho định dạng bìa mềm. Cuốn sách này thu hút cả những nhà quản lý mới và đã có kinh nghiệm như một người hướng dẫn giới thiệu và tài liệu tham khảo. Cuốn sách cũng cung cấp các biểu mẫu và bảng tính, mẹo sử dụng MS Project và bao gồm các chủ đề mới như dự án Công nghệ thong tin và kỹ thuật nhanh.',
    },
    {
        id: 'p4',
        price: 5,
        title: 'Project Management: A Systems Approach to Planning, Scheduling, and Controlling',
        description:
            'Tác giả của cuốn sách là Harold Kerzner – Tiến sĩ, giám đốc điều hành cấp cao của IIL, một công ty giải pháp học tập. Cuốn sách này đã trở thành sách giáo khoa cho sinh viên của Quản lý dự án cũng như các nhà quản lý đang học thi chứng chỉ PMP. Đây là một văn bản toàn diện về các nguyên tắc và thực tiễn mà phiên bản mới nhất của cuốn sách đã bổ sung hơn 30 phần mới về các quy trình quản lý dự án khác nhau, bao gồm các dạng kết thúc dự án, tài trợ và làm việc nhóm. Nó được liên kết với sách PMBOK của PMI (1).',
    },
    {
        id: 'p5',
        price: 5,
        title: 'Guide to Project Management: Getting it right and achieving lasting benefit.',
        description:
            'Cuốn sách này được viết bởi Paul Roberts, một người quản lý dự án dày dặn kinh nghiệm và là giám đốc sáng lập của fifthday.com – một công ty tư vấn quản lý thay đổi. Bên cạnh việc thảo luận về các quy trình, cuốn sách nhấn mạnh về tầm quan trọng của việc có được sự cam kết của toàn bộ tổ chức và thu hút thành công các bên liên quan của dự án. Phần còn lại của cuốn sách còn chỉ ra các bước quản lý dự án trong cả một chu trình với các sơ đồ, biểu đồ và các công cụ hữu ích khác.',
    },
    {
        id: 'p6',
        price: 6,
        title: 'Brilliant Project Management: What the best project managers know, do, and say',
        description:
            'Stephen Barker và Rob Cole đã có khoảng 35 năm kinh nghiệm quản lý dự án. Dựa trên kinh nghiệm của mình, họ đã chia sẻ trong cuốn sách này những yếu tố làm nên một dự án thành công, cách cung cấp những gì đã hứa và làm thế nào để duy trì ngân sách và triển khai đúng tiến độ. Hai tác giả cũng chia sẻ cái nhìn sâu sắc của họ về các phương pháp, đào tạo và các đoàn thể.',
    },
    {
        id: 'p7',
        price: 7,
        title: 'Project Management Lite: Just Enough to Get the Job Done… Nothing More',
        description:
            'Cuốn sách được viết bởi Juana Clark Craig, một nhà quản lý dự án chuyên nghiệp, xuất bản vào tháng 11 năm 2012 và có 138 trang. Phiên bản bìa mềm có giá $ 11,47. Cuốn sách này được khuyến nghị cho những người mới bắt đầu trong lĩnh vực quản lý dự án hoặc những người phải quản lý dự án chỉ một lần. Nó là một bản hướng dẫn từng bước với các câu chữ đơn giản thay vì các thuật ngữ thông dụng. Cuốn sách đồng thời có các bảng tính và danh sách kiểm tra để giúp theo dõi và thực hiện dự án dễ dàng.',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
