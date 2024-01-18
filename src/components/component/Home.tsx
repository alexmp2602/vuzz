import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Tu Negocio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#servicios"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonios"
          >
            Testimonios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contacto"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  ¿Quieres aumentar tus ventas online y atraer clientes?
                </h1>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre cómo podemos ayudarte a crecer tu negocio con
                  nuestras soluciones personalizadas.
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contáctanos
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  alt="Imagen de presentación"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="500"
                  src="/img/celu.png"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="servicios">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ofrecemos una variedad de servicios diseñados para ayudarte a
                  aumentar tus ventas online y atraer a más clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <ShoppingCartIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">E-commerce</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Creamos tiendas online atractivas y fáciles de usar que te
                  ayudarán a vender más.
                </p>
              </div>
              <div className="grid gap-1">
                <SearchIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">SEO</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Optimizamos tu sitio web para los motores de búsqueda para
                  atraer a más visitantes.
                </p>
              </div>
              <div className="grid gap-1">
                <BarChartIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Analítica Web</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Te proporcionamos información valiosa sobre el comportamiento
                  de tus visitantes para que puedas tomar decisiones informadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-100 dark:bg-gray-800" id="testimonios">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Testimonios de Clientes
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                No te quedes solo con nuestra palabra, mira lo que nuestros
                clientes tienen que decir.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage
                      alt="Cliente 1"
                      src="/placeholder.svg?height=40&width=40"
                    />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle>Cliente 1</CardTitle>
                    <CardDescription>CEO, Empresa 1</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                {"\"Estoy muy satisfecho con el servicio. Mi tienda online ha aumentado sus ventas gracias a su ayuda.\""}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage
                      alt="Cliente 2"
                      src="/placeholder.svg?height=40&width=40"
                    />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle>Cliente 2</CardTitle>
                    <CardDescription>CEO, Empresa 2</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                {"\"El servicio de SEO ha sido excelente. Nuestro sitio web ahora aparece en la primera página de Google.\""}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="contacto">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contáctanos
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ¿Listo para llevar tu negocio al siguiente nivel? Déjanos tus
                datos y nos pondremos en contacto contigo.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" required />
                </div>
                <Button className="w-full" type="submit">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Tu Negocio. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BarChartIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function MountainIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
