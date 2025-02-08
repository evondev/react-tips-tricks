# Component

<!-- ✅ -->

- Sử dụng self-closing tag khi không có sử dụng children ✅
- Sử dụng `Fragment` khi muốn gom nhóm các thẻ mà không phát sinh thẻ mới ✅
- Nên spread props ✅
- Default values cho props ✅
- Sử dụng dấu {} hợp lý ✅
- Đối với props là `boolean` nếu giá trị là true thì không cần truyền vào giá trị ✅
- Lưu ý khi sử dụng `.length` làm điều kiện hiển thị. Có thể sử dụng `!!value.length` hoặc kiểm tra `value.length > 0` ✅
- Sử dụng function curries khi làm việc với input sự kiện `onChange`
- Đưa những biến mà không phụ thuộc component ra bên ngoài component ✅
- Xử lý early return khi gặp hook
- Group state
- Cách đặt tên cho props, function
