'use client';

export default function Privacy() {
  return (
    <div style={{minHeight:"100vh",background:"#FAFAF8",color:"#2C2010",fontFamily:"'DM Sans',sans-serif",padding:"60px 24px 100px",maxWidth:680,margin:"0 auto",lineHeight:1.8}}>
      <a href="/" style={{display:"inline-block",marginBottom:40,fontSize:13,color:"#C9A96E",textDecoration:"none",letterSpacing:1}}>← Back to Nuette</a>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:38,fontWeight:300,color:"#2C2010",marginBottom:8}}>Privacy Policy</h1>
      <p style={{fontSize:13,color:"#8a8070",marginBottom:40}}>Last updated: February 26, 2026</p>

      <p>At Nuette, your family's privacy matters deeply to us. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Nuette, you agree to the practices described below.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>1. Information We Collect</h2>
      <p><strong>Account information:</strong> When you create an account, we collect your email address and password. Your password is securely hashed and never stored in plain text.</p>
      <p><strong>Baby profile information:</strong> To personalize Luna's coaching, we collect the information you provide during onboarding, including your baby's name, age, current sleep patterns, and your chosen sleep training method.</p>
      <p><strong>Chat messages:</strong> Your conversations with Luna — including daytime and nighttime coaching messages — are stored so Luna can reference your history and track your progress over time.</p>
      <p><strong>Sleep and nap logs:</strong> We store the sleep logs and nap records you create within the App to provide night-by-night progress tracking.</p>
      <p><strong>Usage data:</strong> We may collect basic usage information such as which screens you visit and when you use the App, to help us improve the experience.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <p style={{paddingLeft:20}}>• Provide and personalize Luna's real-time sleep coaching<br/>
      • Track your baby's sleep training progress night by night<br/>
      • Maintain and improve the App<br/>
      • Communicate with you about your account or important updates<br/>
      • Respond to support requests</p>
      <p><strong>We do not sell, rent, or share your personal information with advertisers or data brokers. Ever.</strong></p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>3. Third-Party Services</h2>
      <p>Nuette relies on the following third-party services to operate:</p>
      <p><strong>Supabase:</strong> Our database and authentication provider. Your account data, profile information, chat messages, and sleep logs are stored securely on Supabase's infrastructure. <a href="https://supabase.com/privacy" style={{color:"#C9A96E"}}>Supabase Privacy Policy</a></p>
      <p><strong>OpenAI:</strong> Luna's AI responses are powered by OpenAI's API. When you send a message to Luna, the content of your conversation is sent to OpenAI to generate a response. OpenAI's API data usage policy states that data sent through the API is not used to train their models. <a href="https://openai.com/policies/privacy-policy" style={{color:"#C9A96E"}}>OpenAI Privacy Policy</a></p>
      <p><strong>Vercel:</strong> Our hosting provider. Vercel serves the App and may collect standard server logs. <a href="https://vercel.com/legal/privacy-policy" style={{color:"#C9A96E"}}>Vercel Privacy Policy</a></p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>4. Data Security</h2>
      <p>We take reasonable measures to protect your information, including encrypted connections (HTTPS), secure password hashing, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>5. Data Retention</h2>
      <p>We retain your data for as long as your account is active. If you delete your account, we will delete your personal information, including your baby's profile, chat history, and sleep logs, within 30 days. Some anonymized or aggregated data may be retained for analytics purposes.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>6. Children's Privacy</h2>
      <p>Nuette is designed for use by parents and legal guardians who are at least 18 years of age. We do not knowingly collect personal information directly from children. The baby profile information entered into the App is provided by the parent or guardian, not by the child. If you believe a child under 13 has provided us with personal information, please contact us and we will promptly delete it.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>7. Your Rights</h2>
      <p>You have the right to:</p>
      <p style={{paddingLeft:20}}>• Access the personal information we hold about you<br/>
      • Request correction of inaccurate information<br/>
      • Request deletion of your account and all associated data<br/>
      • Withdraw consent at any time by discontinuing use of the App</p>
      <p>To exercise any of these rights, contact us at <a href="mailto:support@nuette.app" style={{color:"#C9A96E"}}>support@nuette.app</a>.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the App or by email. Your continued use of Nuette after changes are posted constitutes your acceptance of the revised policy.</p>

      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,marginTop:40,marginBottom:12,color:"#2C2010"}}>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or how your data is handled, please contact us at:</p>
      <p><a href="mailto:hello@nuette.app" style={{color:"#C9A96E"}}>hello@nuette.app</a></p>

      <div style={{marginTop:60,paddingTop:24,borderTop:"1px solid rgba(201,169,110,0.15)",fontSize:12,color:"#c4beb5",textAlign:"center"}}>© 2026 Nuette. All rights reserved.</div>
    </div>
  );
}
