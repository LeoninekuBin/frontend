import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const password = form.elements.namedItem('password') as HTMLInputElement
    const confirmation = form.elements.namedItem('confirmPassword') as HTMLInputElement

    confirmation.setCustomValidity(
      password.value === confirmation.value ? '' : 'Mật khẩu xác nhận chưa khớp.',
    )

    if (!form.reportValidity()) return
    setSubmitted(true)
  }

  return (
    <main className="registration-page">
      <aside className="showroom-panel" data-node-id="226:5671">
        <div className="showroom-copy">
          <p className="eyebrow" data-node-id="226:5674">LAMBORGHINI / EXCLUSIVE ACCESS</p>
          <h2 className="showroom-title" data-node-id="226:5675">YOUR WORLD.<br />YOUR LEGACY.</h2>
          <p className="showroom-description" data-node-id="226:5676">
            Không chỉ là một chiếc xe.<br />Đó là dấu ấn của chính bạn.
          </p>
        </div>
        <ol className="showroom-steps" data-node-id="226:5677">
          <li>01 / CẤU HÌNH CỦA BẠN</li>
          <li>02 / TRẢI NGHIỆM CÁ NHÂN</li>
          <li>03 / KẾT NỐI SHOWROOM</li>
        </ol>
        <p className="showroom-footer" data-node-id="226:5678">
          AUTOMOBILI LAMBORGHINI · VIỆT NAM
        </p>
      </aside>

      <section className="form-panel" aria-labelledby="form-title">
        <div className="form-content">
          <p className="eyebrow" data-node-id="226:5679">PRIVATE AREA / CUSTOMER</p>
          <h1 id="form-title" data-node-id="226:5680">TẠO TÀI KHOẢN</h1>
          <p className="form-intro" data-node-id="226:5681">
            Lưu cấu hình xe và quản lý trải nghiệm của bạn.
          </p>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label className="field" data-node-id="226:5682">
                <span>Họ <span aria-hidden="true">*</span></span>
                <input name="lastName" autoComplete="family-name" placeholder="Nguyễn" required />
              </label>
              <label className="field" data-node-id="226:5683">
                <span>Tên <span aria-hidden="true">*</span></span>
                <input name="firstName" autoComplete="given-name" placeholder="Minh Anh" required />
              </label>
            </div>

            <label className="field" data-node-id="226:5684">
              <span>Email <span aria-hidden="true">*</span></span>
              <span className="input-wrap">
                <input name="email" type="email" autoComplete="email" placeholder="minhanh@email.com" required />
                <svg className="field-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
            </label>

            <div className="field-grid">
              <label className="field" data-node-id="226:5685">
                <span>Số điện thoại <span aria-hidden="true">*</span></span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+84 912 345 678" required />
              </label>
              <label className="field" data-node-id="226:5686">
                <span>Quốc gia / Khu vực <span aria-hidden="true">*</span></span>
                <span className="input-wrap">
                  <select name="country" defaultValue="VN" autoComplete="country" required>
                    <option value="VN">Việt Nam</option>
                    <option value="SG">Singapore</option>
                    <option value="TH">Thái Lan</option>
                    <option value="MY">Malaysia</option>
                    <option value="ID">Indonesia</option>
                  </select>
                  <svg className="field-icon select-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                </span>
              </label>
            </div>

            <label className="field password-field" data-node-id="226:5687">
              <span>Mật khẩu <span aria-hidden="true">*</span></span>
              <span className="input-wrap">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Tạo mật khẩu"
                  minLength={12}
                  pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{12,}"
                  title="Dùng ít nhất 12 ký tự, gồm chữ hoa, chữ thường và số."
                  required
                />
                <button
                  className="visibility-toggle"
                  type="button"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  <VisibilityIcon visible={showPassword} />
                </button>
              </span>
              <span className="field-hint">Tối thiểu 12 ký tự, gồm chữ hoa, chữ thường và số.</span>
            </label>

            <label className="field confirmation-field" data-node-id="226:5688">
              <span>Xác nhận mật khẩu <span aria-hidden="true">*</span></span>
              <span className="input-wrap">
                <input
                  name="confirmPassword"
                  type={showConfirmation ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Nhập lại mật khẩu"
                  minLength={12}
                  required
                  onChange={(event) => event.currentTarget.setCustomValidity('')}
                />
                <button
                  className="visibility-toggle"
                  type="button"
                  aria-label={showConfirmation ? 'Ẩn mật khẩu xác nhận' : 'Hiện mật khẩu xác nhận'}
                  onClick={() => setShowConfirmation((visible) => !visible)}
                >
                  <VisibilityIcon visible={showConfirmation} />
                </button>
              </span>
            </label>

            <div className="consent-list">
              <label className="checkbox-field" data-node-id="226:5689">
                <input name="terms" type="checkbox" required />
                <span>Tôi đồng ý <a href="#terms">Điều khoản</a> &amp; <a href="#privacy">Chính sách bảo mật</a>. <span aria-hidden="true">*</span></span>
              </label>
              <label className="checkbox-field" data-node-id="226:5690">
                <input name="marketing" type="checkbox" />
                <span>Nhận thông tin và sự kiện Lamborghini.</span>
              </label>
            </div>

            <button className="submit-button" type="submit" data-node-id="226:5691">
              TẠO TÀI KHOẢN
            </button>
            <p className="submit-status" role="status" aria-live="polite">
              {submitted ? 'Biểu mẫu đã được xác thực.' : ''}
            </p>
          </form>

          <p className="login-prompt" data-node-id="226:5692">
            Đã có tài khoản? <a href="#login">Đăng nhập →</a>
          </p>
          <p className="account-note" data-node-id="226:5693">
            Dealer và Admin sử dụng tài khoản do quản trị viên cấp.
          </p>
        </div>
      </section>
    </main>
  )
}

function VisibilityIcon({ visible }: { visible: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {visible ? (
        <>
          <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      ) : (
        <>
          <path d="M3 3 21 21M10.6 6.2A9 9 0 0 1 12 6c6.1 0 9.5 6 9.5 6a15 15 0 0 1-3.1 3.7M6.2 6.8C3.8 8.3 2.5 12 2.5 12s3.4 6 9.5 6a9 9 0 0 0 3-.5" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      )}
    </svg>
  )
}

export default App
