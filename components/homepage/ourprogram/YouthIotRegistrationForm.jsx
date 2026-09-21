'use client';

import React, { useMemo, useRef, useState } from 'react';
import { CheckCircle2, FileText, ImagePlus, Loader2, Send, UploadCloud } from 'lucide-react';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const PROGRAM_STUDIES = [
  'Teknik Elektro',
  'Teknik Perkapalan',
  'Teknik Mesin',
  'Teknik Industri',
  'Teknik Logistik',
];

const ENGINEER_DIVISIONS = [
  'Software Engineer',
  'Firmware Engineer',
  'Hardware Engineer',
  'UI/UX Engineer',
  'Network Engineer',
  'Electrical Engineer',
];

const NON_ENGINEER_DIVISIONS = [
  'Creative Media',
  'Public Relation',
  'Academic',
];

const FILE_RULES = {
  passportPhoto: {
    label: 'Pas Foto 4x6 (Background Putih)',
    required: true,
    accept: 'image/jpeg,image/png',
    types: 'JPG / JPEG / PNG',
  },
  academicDocument: {
    label: 'KTM / KHS / KST',
    required: true,
    accept: 'image/jpeg,image/png,application/pdf',
    types: 'JPG / JPEG / PNG / PDF',
  },
  cv: {
    label: 'CV (Curriculum Vitae) — ATS Preferred',
    required: true,
    accept: 'application/pdf,.doc,.docx',
    types: 'PDF / DOC / DOCX',
  },
  portfolio: {
    label: 'Portofolio (media creative wajib)',
    required: false,
    accept: 'image/jpeg,image/png,application/pdf,.doc,.docx',
    types: 'JPG / PNG / PDF / DOC / DOCX',
  },
};

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFieldError(file, rule) {
  if (!file) {
    return rule.required ? 'File wajib diunggah.' : '';
  }

  if (file.size > MAX_FILE_SIZE) {
    return `Ukuran file maksimal 5 MB. File kamu ${formatBytes(file.size)}.`;
  }

  return '';
}

function FileUploadField({ id, name, rule, file, onChange, error }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-sky-300 hover:bg-white">
      <label htmlFor={id} className="block cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dff3fb] text-[#33455b]">
            {id === 'passport-photo' ? (
              <ImagePlus size={21} />
            ) : (
              <FileText size={21} />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-slate-800">{rule.label}</span>
              {rule.required ? (
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-500">
                  Wajib
                </span>
              ) : (
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                  Opsional
                </span>
              )}
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {rule.types} · Maks. 5 MB
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              <UploadCloud size={15} />
              {file ? 'Ganti file' : 'Pilih file'}
            </div>

            {file && (
              <p className="mt-2 truncate text-xs font-medium text-emerald-600" title={file.name}>
                ✓ {file.name}
              </p>
            )}
          </div>
        </div>
      </label>

      <input
        id={id}
        name={name}
        type="file"
        accept={rule.accept}
        required={rule.required}
        className="sr-only"
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
      />

      {error && <p className="mt-3 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

const inputClassName =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1b96fc] focus:ring-4 focus:ring-[#1b96fc]/10';

const selectClassName = `${inputClassName} cursor-pointer`;

export default function YouthIotRegistrationForm() {
  const formRef = useRef(null);
  const [files, setFiles] = useState({
    passportPhoto: null,
    academicDocument: null,
    cv: null,
    portfolio: null,
  });
  const [fileErrors, setFileErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const googleAppsScriptUrl = process.env.NEXT_PUBLIC_YOUTH_IOT_APPS_SCRIPT_URL?.trim();
  const hasEndpoint = Boolean(googleAppsScriptUrl);

  const formConfiguredMessage = useMemo(
    () =>
      'Form belum aktif karena endpoint pendaftaran belum dikonfigurasi di server.',
    [],
  );

  const handleFileChange = (key, file) => {
    const rule = FILE_RULES[key];
    const error = getFieldError(file, rule);

    setFiles((current) => ({ ...current, [key]: file }));
    setFileErrors((current) => ({ ...current, [key]: error }));
    setStatus({ type: '', message: '' });
  };

  const validateFiles = () => {
    const nextErrors = {};
    let valid = true;

    Object.entries(FILE_RULES).forEach(([key, rule]) => {
      const error = getFieldError(files[key], rule);
      if (error) valid = false;
      nextErrors[key] = error;
    });

    setFileErrors(nextErrors);
    return valid;
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || '');
        const commaIndex = result.indexOf(',');
        resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result);
      };
      reader.onerror = () => reject(new Error(`Gagal membaca file ${file.name}.`));
      reader.readAsDataURL(file);
    });

  const serializeFile = async (file) => {
    if (!file) return null;
    return {
      name: file.name,
      mimeType: file.type || 'application/octet-stream',
      size: file.size,
      base64: await fileToBase64(file),
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateFiles()) {
      setStatus({
        type: 'error',
        message:
          'Periksa kembali dokumen yang diunggah. Pastikan semua file wajib sudah dipilih dan ukurannya tidak lebih dari 5 MB.',
      });
      return;
    }

    if (!hasEndpoint) {
      setStatus({ type: 'error', message: formConfiguredMessage });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const payload = {
        formType: 'youth_iot_2026',
        program: 'Youth IoT 2026',
        email: String(formData.get('email') || '').trim(),
        nama: String(formData.get('name') || '').trim(),
        nim: String(formData.get('NIM') || '').trim(),
        programStudy: String(formData.get('Program Studi') || '').trim(),
        engineerDivision: String(formData.get('Divisi Engineer') || '').trim(),
        nonEngineerDivision: String(formData.get('Divisi Non Engineer') || '').trim(),
        honeypot: String(formData.get('website') || ''),
        files: {
          passportPhoto: await serializeFile(files.passportPhoto),
          academicDocument: await serializeFile(files.academicDocument),
          cv: await serializeFile(files.cv),
          portfolio: await serializeFile(files.portfolio),
        },
      };

      // text/plain is a simple CORS request, so Apps Script can receive it without preflight.
      // no-cors makes the browser accept the cross-origin submission; Apps Script handles the save.
      await fetch(googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      formRef.current.reset();
      setFiles({
        passportPhoto: null,
        academicDocument: null,
        cv: null,
        portfolio: null,
      });
      setFileErrors({});
      setStatus({
        type: 'success',
        message:
          'Pendaftaran berhasil dikirim. Data dan dokumen kamu sudah tersimpan di Google Sheets dan Google Drive panitia.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="pendaftaran-youth-iot" className="mt-20 scroll-mt-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl">
        <div className="bg-[#33455b] px-6 py-8 text-white md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-200">
              Registration Form
            </p>
            <h3 className="font-optima text-3xl font-bold md:text-5xl">Daftar Youth IoT 2026</h3>
            <p className="mt-3 text-sm leading-6 text-slate-200 md:text-base">
              Lengkapi data diri dan dokumen pendaftaran kamu. Pastikan seluruh data yang diisi sudah benar sebelum menekan tombol kirim.
            </p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8 p-6 md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" className={inputClassName} required />
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-800">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Nama lengkap" className={inputClassName} required />
            </div>

            <div>
              <label htmlFor="nim" className="mb-2 block text-sm font-bold text-slate-800">
                NIM <span className="text-red-500">*</span>
              </label>
              <input id="nim" name="NIM" type="text" inputMode="numeric" placeholder="Masukkan NIM" className={inputClassName} required />
            </div>

            <div>
              <label htmlFor="program-studi" className="mb-2 block text-sm font-bold text-slate-800">
                Program Studi <span className="text-red-500">*</span>
              </label>
              <select id="program-studi" name="Program Studi" className={selectClassName} defaultValue="" required>
                <option value="" disabled>
                  Pilih program studi
                </option>
                {PROGRAM_STUDIES.map((study) => (
                  <option key={study} value={study}>
                    {study}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="divisi-engineer" className="mb-2 block text-sm font-bold text-slate-800">
                Divisi Engineer <span className="text-red-500">*</span>
              </label>
              <select id="divisi-engineer" name="Divisi Engineer" className={selectClassName} defaultValue="" required>
                <option value="" disabled>
                  Pilih divisi engineer
                </option>
                {ENGINEER_DIVISIONS.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="divisi-non-engineer" className="mb-2 block text-sm font-bold text-slate-800">
                Divisi Non Engineer <span className="text-red-500">*</span>
              </label>
              <select id="divisi-non-engineer" name="Divisi Non Engineer" className={selectClassName} defaultValue="" required>
                <option value="" disabled>
                  Pilih divisi non engineer
                </option>
                {NON_ENGINEER_DIVISIONS.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h4 className="text-base font-extrabold text-slate-900">Dokumen Pendaftaran</h4>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Gunakan file yang jelas dan dapat dibuka. Maksimal ukuran tiap file adalah 5 MB.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FileUploadField
                id="passport-photo"
                name="Pas Foto 4x6"
                rule={FILE_RULES.passportPhoto}
                file={files.passportPhoto}
                error={fileErrors.passportPhoto}
                onChange={(file) => handleFileChange('passportPhoto', file)}
              />
              <FileUploadField
                id="academic-document"
                name="KTM KHS KST"
                rule={FILE_RULES.academicDocument}
                file={files.academicDocument}
                error={fileErrors.academicDocument}
                onChange={(file) => handleFileChange('academicDocument', file)}
              />
              <FileUploadField
                id="cv"
                name="CV"
                rule={FILE_RULES.cv}
                file={files.cv}
                error={fileErrors.cv}
                onChange={(file) => handleFileChange('cv', file)}
              />
              <FileUploadField
                id="portfolio"
                name="Portofolio"
                rule={FILE_RULES.portfolio}
                file={files.portfolio}
                error={fileErrors.portfolio}
                onChange={(file) => handleFileChange('portfolio', file)}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-sm leading-6 text-slate-600">
            <p>
              <span className="font-bold text-slate-800">Catatan:</span> Pas foto wajib menggunakan background putih. Untuk CV, format ATS-friendly (PDF/DOC/DOCX dengan layout sederhana dan mudah dibaca) lebih disarankan.
            </p>
          </div>

          {status.message && (
            <div
              role="status"
              className={`flex items-start gap-3 rounded-2xl border p-4 text-sm leading-6 ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-red-200 bg-red-50 text-red-600'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
              ) : (
                <span className="mt-0.5 shrink-0 text-lg font-bold">!</span>
              )}
              <p>{status.message}</p>
            </div>
          )}

          {!hasEndpoint && (
            <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-700">
              Mode konfigurasi: endpoint Google Apps Script belum diatur di environment variable.
            </p>
          )}

          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1b96fc] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1b96fc]/20 transition hover:-translate-y-0.5 hover:bg-[#147fd9] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:min-w-56"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
          </button>
        </form>
      </div>
    </section>
  );
}
