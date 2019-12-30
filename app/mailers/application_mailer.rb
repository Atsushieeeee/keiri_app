class ApplicationMailer < ActionMailer::Base
  default from: "example@example.com"   # 送信元アドレス
  default to: "atsushi0517app@gmail.com"     # 送信先アドレス

  layout 'mailer'
end
