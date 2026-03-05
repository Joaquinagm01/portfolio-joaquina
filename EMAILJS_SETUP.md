# 📧 Configuración del Formulario de Contacto con EmailJS

El formulario de contacto está integrado con **EmailJS** para enviar emails directamente desde el navegador sin necesidad de un backend.

## 🚀 Configuración Rápida

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)
3. Verifica tu email

### 2. Configurar Email Service

1. En el dashboard, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Conecta tu cuenta de email
5. Copia el **Service ID** que se genera

### 3. Crear Email Template

1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Usa esta plantilla:

```
Subject: Nuevo mensaje de {{from_name}} - {{subject}}

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio.
```

4. Copia el **Template ID**

### 4. Obtener Public Key

1. Ve a **Account** → **General**
2. Copia tu **Public Key** (también llamado User ID)

### 5. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**¡IMPORTANTE!** Agrega `.env` a tu `.gitignore` para no subir las credenciales:

```
# .gitignore
.env
.env.local
.env.production
```

### 6. Reiniciar servidor

```bash
npm run dev
```

## ✅ Verificar Funcionamiento

1. Llena el formulario de contacto en tu portfolio
2. Click en "Enviar mensaje"
3. Deberías ver el mensaje de éxito
4. Revisa tu email para confirmar la recepción

## 🔍 Modo Desarrollo

Si no configuras las variables de entorno, el formulario funcionará en **modo desarrollo**:
- Mostrará el mensaje de éxito
- NO enviará emails reales
- Los datos se imprimirán en la consola del navegador

Esto te permite probar la UI sin configurar EmailJS.

## 📝 Campos del Formulario

El template de EmailJS debe usar estas variables:

- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Cuerpo del mensaje
- `{{to_name}}` - Tu nombre (hardcodeado como "Joaquina")

## 🎨 Personalización

Para cambiar el destinatario o agregar más campos, edita:

`src/components/ContactForm.jsx` línea ~90:

```javascript
await emailjs.send(
  serviceId,
  templateId,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Joaquina', // Cambia esto
  },
  publicKey
);
```

## 🐛 Troubleshooting

### Error: "EmailJS not configured"
→ Asegúrate de crear el archivo `.env` con las variables correctas

### Error: "Failed to send email"
→ Verifica que las credenciales sean correctas
→ Revisa que el template tenga las variables correctas

### Emails no llegan
→ Revisa la carpeta de spam
→ Verifica tu cuota mensual en EmailJS (máx 200 en plan gratuito)
→ Confirma que el servicio de email esté conectado

## 🔒 Seguridad

✅ **Las credenciales son seguras de exponer en el frontend** porque EmailJS usa un sistema de dominios autorizados
✅ Configura dominios permitidos en EmailJS Dashboard → Account → Security
✅ Activa el captcha anti-spam para protección adicional

## 📚 Documentación Oficial

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [Troubleshooting](https://www.emailjs.com/docs/faq/common-problems/)

---

**💡 Tip:** Usa un email dedicado para recibir mensajes del portfolio (ej: contacto@tudominio.com) en lugar de tu email personal.
